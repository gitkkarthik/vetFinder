// backend/routes/vets.js
import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { location, types = 'veterinary_clinic,veterinary_hospital', limit = 10 } = req.query;
    
    const response = await axios.get('https://api.krutrim.com/nearby', {
      params: { location, types, limit },
      headers: {
        'X-Request-Id': uuidv4(),
        'X-Correlation-Id': uuidv4(),
        'Accept': 'application/json'
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ error: 'Failed to fetch veterinary clinics' });
  }
});

export default router;