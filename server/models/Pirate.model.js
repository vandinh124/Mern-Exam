const mongoose = require('mongoose');

const PirateSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [
                true,
                "Name is required"
            ], 
            minlength: [
                3, 
                "Name must be at least 3 characters long"
            ]
        },
        position: {
            type: String,
            required: [
                true,
                "Position is required"
            ], 
            minlength: [
                3, 
                "Position must be at least 3 characters long"
            ]
        },
        imageUrl: {
            type: String,
            required: [
              true,
              'Please provide an image URL!'
            ]
          },
        treasure: {
            type: Number,
            required: [
                true,
                'Please provide number of treasure'
            ]
        },
        phrase: {
            type: String,
            required: [
                true,
                "Phrase is required"
            ], 
            minlength: [
                6, 
                "Phrase must be at least 6 characters long"
            ]
        },
        hookHand: {
            type: Boolean,
            required: [
              true,
              'Please specify if if the pirate has hook hand.'
            ]
        },
        pegLeg: {
        type: Boolean,
        required: [
            true,
            'Please specify if if the pirate has peg leg.'
        ]
        },
        eyePatch: {
        type: Boolean,
        required: [
            true,
            'Please specify if if the pirate has eye patch.'
        ]
        }
},{timestamps: true});

module.exports.Pirate = mongoose.model("Pirate", PirateSchema);
