const NodeWebcam = require( "node-webcam" );
const path = require('path');

const webcam_opts = {
    width: 264,
    height: 264,
    quality: 100,
    frames: 60,
    delay: 0,
    saveShots: true,
    output: "jpeg",
    device: false,
    callbackReturn: "location",
    verbose: false
  };
  
var exports = module.exports = {};

exports.captureFrame = function() {

    return new Promise((resolve, reject) => {
        try {
          const Webcam = NodeWebcam.create( webcam_opts );
          // imageDirPath = path.join(__dirname, process.env.DATA_DIR);
          const imgPath = path.join(__dirname, 'frame.jpg');
          // const imgPath = path.join(process.env.DATA_DIR, 'frame.jpg');
          Webcam.capture( imgPath, async function( err, img ) {
            if(err){
              console.error(err);
              return reject(err);
            }
            resolve(img);        
          });
        } catch (err) {
            console.error(err);
            return reject(err);
        }    
      });

}
