'use server';

/**
 * @fileOverview AI-powered personalized learning path generation.
 *
 * This file defines a Genkit flow that takes a user's interests, skill level, and career goals
 * and generates a personalized learning path with course recommendations.
 *
 * - personalizedLearningPath - A function that handles the generation of personalized learning paths.
 * - PersonalizedLearningPathInput - The input type for the personalizedLearningPath function.
 * - PersonalizedLearningPathOutput - The return type for the personalizedLearningPath function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedLearningPathInputSchema = z.object({
  interests: z
    .string()
    .describe('The learners interests, comma separated. E.g. AI, Blockchain, Web3'),
  skillLevel: z.enum(['beginner', 'intermediate', 'advanced']).describe('The skill level of the learner.'),
  careerGoals: z.string().describe('The career goals of the learner.'),
});
export type PersonalizedLearningPathInput = z.infer<typeof PersonalizedLearningPathInputSchema>;

const PersonalizedLearningPathOutputSchema = z.object({
  learningPath: z.array(
    z.object({
      courseName: z.string().describe('The name of the recommended course.'),
      description: z.string().describe('A brief description of the course.'),
      estimatedDuration: z.string().describe('The estimated duration of the course (e.g., 12 weeks).'),
    })
  ).describe('A list of courses that create a personalized learning path.'),
  summary: z.string().describe('A summary of the generated learning path.'),
});
export type PersonalizedLearningPathOutput = z.infer<typeof PersonalizedLearningPathOutputSchema>;

export async function personalizedLearningPath(
  input: PersonalizedLearningPathInput
): Promise<PersonalizedLearningPathOutput> {
  return personalizedLearningPathFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedLearningPathPrompt',
  input: {schema: PersonalizedLearningPathInputSchema},
  output: {schema: PersonalizedLearningPathOutputSchema},
  prompt: `You are an AI learning path generator. You will generate a personalized learning path
  based on the user's interests, skill level, and career goals. The learning path should be a list of courses
  with a brief description and estimated duration for each.

  Interests: {{{interests}}}
  Skill Level: {{{skillLevel}}}
  Career Goals: {{{careerGoals}}}

  Each course should be relevant to the interests and career goals of the learner, and it should be appropriate
  for the skill level of the learner.

  Return the course list and a summary of the learning path.`,
});

const personalizedLearningPathFlow = ai.defineFlow(
  {
    name: 'personalizedLearningPathFlow',
    inputSchema: PersonalizedLearningPathInputSchema,
    outputSchema: PersonalizedLearningPathOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
