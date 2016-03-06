var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var testModel = new Schema({
    scenes:[{   
                name: String, 
                scenes: [{
                        name: String, 
                        fpsMin: Number, 
                        fpsMax: Number,
                        fps: Number
                }]
            }],
    fpsMin: Number,
    fps: Number,
    format: String,
    userAgent: {
        os: String,
        device: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

var Test = mongoose.model('Test', testModel);
module.exports = Test;