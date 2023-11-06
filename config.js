// Server configuration
export const SERVER_PORT = process.env.PORT || 3000; // Server port
export const DEBUG = false; // Debug mode

// Prompt Moderation before sending to OpenAI
export const MODERATION = true; // Moderation mode

// Rate limit
export const PRIOD = 10 * 1000; // 10 seconds
export const RATE_LIMIT = process.env.LIMIT || 5; // 5 requests per 10 seconds

// Whitelisted IPs
export const WHITELISTED_IPS = [
    // "127.0.0.1"
];

// OpenAI API Keys
export let OPENAI_KEYS = [
    process.env.OPENAI_KEY,
];
