import app from './app';
import { ENV } from './config/env.config.js';

const PORT = ENV.PORT;

app.listen(PORT, () => {
    console.log(`ScaleOps API server is running on port ${PORT}`);
});