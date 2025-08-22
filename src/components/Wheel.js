import { Alert, StyleSheet, Text, View } from 'react-native';
import WebView from 'react-native-webview';
import { useStore } from '../store/context';

export default function Wheel() {
  const { setSelectedColor } = useStore();

  const htmlContent = `
 <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
    <style>
      *{margin:0;padding:0;}
      html, body {
        background: transparent !important;
      }
      #wrapper{ margin:0 auto; width:266px; position:relative; }
      #wheel{ width:250px; height:250px; border-radius:50%; position:relative; overflow:hidden; border:8px solid #fff; box-shadow:rgba(0,0,0,0.2) 0px 0px 10px; transform:rotate(0deg);}
      #inner-wheel{ width:100%; height:100%; transition: all 6s cubic-bezier(0,.99,.44,.99); }
      #wheel div.sec{ position:absolute; width:0; height:0; border-style:solid; border-width:130px 75px 0; border-color:#19c transparent; transform-origin:75px 129px; left:50px; top:-4px;}
      #wheel div.sec:nth-child(1){ transform:rotate(60deg); border-color:#16a085 transparent;}
      #wheel div.sec:nth-child(2){ transform:rotate(120deg); border-color:#2980b9 transparent;}
      #wheel div.sec:nth-child(3){ transform:rotate(180deg); border-color:#34495e transparent;}
      #wheel div.sec:nth-child(4){ transform:rotate(240deg); border-color:#f39c12 transparent;}
      #wheel div.sec:nth-child(5){ transform:rotate(300deg); border-color:#d35400 transparent;}
      #wheel div.sec:nth-child(6){ transform:rotate(360deg); border-color:#c0392b transparent;}
      #wheel div.sec .fa{ margin-top:-100px; color:rgba(0,0,0,0.2); position:relative; display:block; text-align:center; font-size:36px; margin-left:-15px; }

      /* Spin Button */
      #spin{ 
        width:68px; height:68px; 
        position:absolute; top:50%; left:50%; 
        margin:-34px 0 0 -34px; 
        border-radius:50%; z-index:1000; 
        background:#fff; cursor:pointer; 
        border:3px solid #ddd;
        display:flex; align-items:center; justify-content:center;
        font-weight:bold; font-size:16px; color:#888;
      }
      #spin:hover { background:#f5f5f5; }

      /* Arrow above spin */
      #spin::before {
        content:"";
        position:absolute;
        top:-18px;
        left:50%;
        transform:translateX(-50%);
        width:0; height:0;
        border-left:12px solid transparent;
        border-right:12px solid transparent;
        border-bottom:18px solid #fff;
      }
    </style>
  </head>
  <body>
    <div id="wrapper">
      <div id="wheel">
        <div id="inner-wheel">
          <div class="sec"><span class="fa fa-bell-o"></span></div>
          <div class="sec"><span class="fa fa-comment-o"></span></div>
          <div class="sec"><span class="fa fa-smile-o"></span></div>
          <div class="sec"><span class="fa fa-heart-o"></span></div>
          <div class="sec"><span class="fa fa-star-o"></span></div>
          <div class="sec"><span class="fa fa-lightbulb-o"></span></div>
        </div>
        <div id="spin">SPIN</div>
      </div>
    </div>
    <script>
     const spinBtn = document.getElementById("spin");
      const innerWheel = document.getElementById("inner-wheel");
      let deg = 0;

      const colors = ["Quick Reaction", "Conversation / Questions", "Emotions", "Friendship", "Talent / Show", "Lightbulb"];

      spinBtn.addEventListener("click", function() {
        deg = Math.floor(5000 + Math.random() * 5000);
        innerWheel.style.transform = "rotate(" + deg + "deg)";
      });

      // Detect when spin animation ends
      innerWheel.addEventListener("transitionend", function() {
        // Normalize degree (0-360)
        let actualDeg = deg % 360;
        // Each slice = 60°
        let index = Math.floor((360 - actualDeg) / 60) % 6;
        let result = colors[index];
        window.ReactNativeWebView.postMessage(result);
      });
    </script>
  </body>
  </html>
  `;

  const handleMessage = event => {
    const message = event.nativeEvent.data;
    console.log(message);
    setSelectedColor(message);
  };

  return (
    <>
      <WebView
        originWhitelist={['*']}
        source={{ html: htmlContent }}
        style={{ backgroundColor: 'transparent', marginTop: 40 }}
        onMessage={handleMessage}
      />
    </>
  );
}
