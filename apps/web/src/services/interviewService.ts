import apiClient from './apiClient';

export const createInterview = async (role: string, type: string) => {
  const response = await apiClient.post('/interviews', { role, type });
  return response.data;
};

export const submitAnswer = async (
  sessionId: string,
  questionId: string,
  answerText: string,
) => {
  const response = await apiClient.post(`/interviews/${sessionId}/answers`, {
    questionId,
    answerText,
  });
  return response.data;
};

export const completeInterview = async (sessionId: string) => {
  const response = await apiClient.patch(`/interviews/${sessionId}/complete`);
  return response.data;
};