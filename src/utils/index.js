import { surpriseMePrompts } from '../constants';

export function getRandomPrompt(Prompt) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];

    if(randomPrompt === Prompt) return getRandomPrompt(Prompt);
    return randomPrompt;
};