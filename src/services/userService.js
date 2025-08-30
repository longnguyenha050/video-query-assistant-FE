import axios from "./axios";

const singleTextSearch = async (params) => {
  try {
    const response = await axios.post(
      '/singletextsearch',
      {
        query: params.query,
        topk: params.topk,
        clip: params.clip,
        clipv2: params.clipv2,
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error in single text search:', error);
    throw error;
  }
};


const QASearch = async (params) => {
  try {
    const response = await axios.post(
      '/qnasearch',
      {
        query: params.query,
        topk: params.topk,
        clip: params.clip,
        clipv2: params.clipv2,
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      } 
    );
    return response.data;
  } catch (error) {
    console.error('Error in single text search:', error);
    throw error;
  }
};

const OcrAndOdSearch = async (params) => {
  try {
    const response = await axios.post(
      '/ocrandodsearch',
      {
        query: params.query,
        topk: params.topk,
        ocr: params.ocr,
        od: params.od,
        bbox: params.bbox,
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      } 
    );
    return response.data;
  } catch (error) {
    console.error('Error in single text search:', error);
    throw error;
  }
};


export { singleTextSearch, QASearch, OcrAndOdSearch };
