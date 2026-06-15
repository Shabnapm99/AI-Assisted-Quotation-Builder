// import { GoogleGenAI } from '@google/genai';
// import fs from 'fs/promises'; // Use the promise-based file system module
// import path from 'path';

// const ai = new GoogleGenAI({});//automatically look for a specific environment variable name

// export const generateAIDraft = async (req, res) => {
//     const {requirement} = req.body;
//     if (!requirement) {
//         return res.status(400).json({ error: "Missing required field: required" });
//     }

//     try {
//         //  Get the directory name of the current controller file (server/src/controllers)
//         const currentDir = import.meta.dirname;

//         // Step out of controllers then look for prompts
//         const promptFilePath = path.join(currentDir, '..', '..', 'prompts', 'quotation-draft.md');

//         // Read the markdown template file contents
//         const basePromptTemplate = await fs.readFile(promptFilePath, 'utf-8');

//         // Combine file's prompt with the input
//         const finalPrompt = `${basePromptTemplate}\n\nUser Input: ${requirement}`;

//         // Call the Gemini API using the recommended gemini-2.5-flash model
//         const response = await ai.models.generateContent({
//             model: 'gemini-2.5-flash',
//             contents: finalPrompt,
//         });
//         // Send the generated draft back to the frontend
//         res.status(200).json({ draft: response.text });

//     } catch (error) {
//         console.error("Gemini API Error:", error);
//         res.status(500).json({ error: "Failed to generate quotation draft." });
//     }

// }

//------------------------------------------------ server error
// import { GoogleGenAI } from '@google/genai';
// import fs from 'fs/promises';
// import path from 'path';

// // Automatically loads the GEMINI_API_KEY from environment variables
// const ai = new GoogleGenAI({});

// export const generateAIDraft = async (req, res) => {
//     const { requirement } = req.body;

//     if (!requirement || typeof requirement !== 'string') {
//         return res.status(400).json({ error: "Missing required string field: requirement" });
//     }

//     try {
//         // 1. Resolve path and read prompt template
//         const currentDir = import.meta.dirname;
//         const promptFilePath = path.join(currentDir, '..', '..', 'prompts', 'quotation-draft.md');
//         const basePromptTemplate = await fs.readFile(promptFilePath, 'utf-8');

//         // 2. Build the final prompt
//         const finalPrompt = `${basePromptTemplate}\n\nUser Input: ${requirement}`;

//         // 3. Define the strict JSON schema to match your precise requirements
//         const quotationSchema = {
//             type: 'OBJECT',
//             properties: {
//                 project_type: { 
//                     type: 'STRING',
//                     description: 'The type of project (e.g. website development, mobile app development)'
//                 },
//                 suggested_items: {
//                     type: 'ARRAY',
//                     description: 'Suggested scope items for the quotation',
//                     items: {
//                         type: 'OBJECT',
//                         properties: {
//                             title: { type: 'STRING', description: 'Item title' },
//                             description: { type: 'STRING', description: 'Detailed breakdown of the scope item' },
//                             quantity: { type: 'INTEGER', description: 'Quantity (typically 1)' },
//                             unit_price: { type: 'NUMBER', nullable: true, description: 'Leave null if pricing is unknown' },
//                             estimated_hours: { type: 'INTEGER', description: 'Estimated time to complete in hours' }
//                         },
//                         required: ['title', 'description', 'quantity', 'estimated_hours']
//                     }
//                 },
//                 questions_to_ask_client: {
//                     type: 'ARRAY',
//                     description: 'Questions to clarify scope with the client',
//                     items: { type: 'STRING' }
//                 },
//                 summary: { 
//                     type: 'STRING',
//                     description: 'A brief 1-2 sentence executive summary of the clients needs'
//                 }
//             },
//             required: ['project_type', 'suggested_items', 'questions_to_ask_client', 'summary']
//         };

//         // 4. Request generation with strict JSON formatting enforced
//         const response = await ai.models.generateContent({
//             model: 'gemini-2.5-flash',
//             contents: finalPrompt,
//             config: {
//                 responseMimeType: 'application/json',
//                 responseSchema: quotationSchema
//             }
//         });

//         // 5. Safely parse the strict JSON output and send it back to the client
//         const parsedDraft = JSON.parse(response.text);
//         res.status(200).json(parsedDraft);

//     } catch (error) {
//         console.error("Gemini API Error:", error);
//         res.status(500).json({ error: "Failed to generate quotation draft." });
//     }
// };





import { GoogleGenAI } from '@google/genai';
import fs from 'fs/promises';
import path from 'path';
import AILogModel from '../models/AILogModel.js';

// Automatically loads the GEMINI_API_KEY from environment variables
const ai = new GoogleGenAI({});

/**
 * Helper utility to retry an async function with exponential backoff.
 * Retries up to 5 times with delays of 1s, 2s, 4s, 8s, and 16s.
 * Do not log retries to console to keep production logs clean.
 */
const callWithRetry = async (apiCall, maxRetries = 5) => {
    let delay = 1000;
    for (let attempt = 0; attempt < maxRetries; attempt++) {
        try {
            return await apiCall();
        } catch (error) {
            const status = error?.status || error?.response?.status;

            // Don't retry on client errors — they won't fix themselves
            const isRetryable = !status || status === 429 || status >= 500;

            if (!isRetryable || attempt === maxRetries - 1) {
                throw error;
            }

            await new Promise(resolve => setTimeout(resolve, delay));
            delay *= 2;
        }
    }
};

export const generateAIDraft = async (req, res) => {
    const { requirement } = req.body;

    if (!requirement || typeof requirement !== 'string') {
        return res.status(400).json({ error: "Missing required string field: requirement" });
    }

    try {
        // Resolve path and read prompt template
        const currentDir = import.meta.dirname;
        const promptFilePath = path.join(currentDir, '..', '..', 'prompts', 'quotation-draft.md');
        const basePromptTemplate = await fs.readFile(promptFilePath, 'utf-8');

        // Build the final prompt
        const finalPrompt = `${basePromptTemplate}\n\nUser Input: ${requirement}`;

        // Define the strict JSON schema to match precise requirements
        const quotationSchema = {
            type: 'OBJECT',
            properties: {
                project_type: {
                    type: 'STRING',
                    description: 'The type of project (e.g. website development, mobile app development)'
                },
                suggested_items: {
                    type: 'ARRAY',
                    description: 'Suggested scope items for the quotation',
                    items: {
                        type: 'OBJECT',
                        properties: {
                            title: { type: 'STRING', description: 'Item title' },
                            description: { type: 'STRING', description: 'Detailed breakdown of the scope item' },
                            quantity: { type: 'INTEGER', description: 'Quantity (typically 1)' },
                            unit_price: { type: 'NUMBER', nullable: true, description: 'Leave null if pricing is unknown' },
                            estimated_hours: { type: 'INTEGER', description: 'Estimated time to complete in hours' }
                        },
                        required: ['title', 'description', 'quantity', 'estimated_hours']
                    }
                },
                questions_to_ask_client: {
                    type: 'ARRAY',
                    description: 'Questions to clarify scope with the client',
                    items: { type: 'STRING' }
                },
                summary: {
                    type: 'STRING',
                    description: 'A brief 1-2 sentence executive summary of the clients needs'
                }
            },
            required: ['project_type', 'suggested_items', 'questions_to_ask_client', 'summary']
        };

        // Request generation with exponential backoff wrapper
        const response = await callWithRetry(() =>
            ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: finalPrompt,
                config: {
                    responseMimeType: 'application/json',
                    responseSchema: quotationSchema
                }
            })
        );

        // Safely parse the strict JSON output and send it back to the client
        const parsedDraft = JSON.parse(response.text);
        // Log to DB
        await AILogModel.create({
            requirement,
            prompt: finalPrompt,
            raw_response: response.text,
            project_type: parsedDraft.project_type || '',
            items_count: parsedDraft.suggested_items?.length || 0,
            success: true,
            createdBy: req.user?._id || null,
        }).catch(err => console.error('AI log failed:', err));
        res.status(200).json(parsedDraft);

    } catch (error) {
        console.error("Gemini API Error:", error);
        res.status(503).json({
            error: "The estimation service is currently experiencing high demand. Please try again in a few moments."
        });
    }
};