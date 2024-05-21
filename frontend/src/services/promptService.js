// src/promptService.js
import axios from "axios";
import BASE_URL from "../config.js";

export const fetchDialoguePrompts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/prompts/dialogue`);
    return response.data;
  } catch (error) {
    console.error("Error fetching the dialogue prompts", error);
    throw error;
  }
};

export const fetchFictionPrompts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/prompts/fiction`);
    return response.data;
  } catch (error) {
    console.error("Error fetching the fiction prompts", error);
    throw error;
  }
};

export const fetchNonfictionPrompts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/prompts/nonfiction`);
    return response.data;
  } catch (error) {
    console.error("Error fetching the nonfiction prompts", error);
    throw error;
  }
};

export const fetchPoetryPrompts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/prompts/poetry`);
    return response.data;
  } catch (error) {
    console.error("Error fetching the poetry prompts", error);
    throw error;
  }
};
