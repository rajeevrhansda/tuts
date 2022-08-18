const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/user/:id/update", (req, res)=>{
    setTimeout(()=>{
        res.send(req.body);
    },[2000]);
});

app .listen(8000, () => {
    console.log("Backend server isd running!");
});
