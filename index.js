const express = require("express");
const bodyParser = require("body-parser");
const { WebhookClient, Payload } = require("dialogflow-fulfillment");
const port = 4000;

//create server
const app = express();

//middleware
app.use(bodyParser).json;
app.get("/", (req, res) => {
  res.sendDate("<h1>Welcome, this is a webhook for Line Chatbot</h1>");
});
app.post("/webhook"),
  (req, res) => {
    //create webhook client
    const agen = new WebhookClient({
      request: req,
      reaponse: res,
    });
    console.log(
      "Dialogflow Request headers: " + JSON.stringify(request.headers)
    );
    console.log("Dialogflow Request body: " + JSON.stringify(request.body));

    function welcome(agent) {
      agent.add(`Welcome to my agent!`);
    }

    function fallback(agent) {
      agent.add(`I didn't understand`);
      agent.add(`I'm sorry, can you try again?`);
    }

    function bodyMassIndex(agent) {
      let weight = agent.parameters.weight;
      let height = agent.parameters.height / 100;
      let bmi = (weight / (height * height)).toFixed(2);
      let result = "ขออภัย หนูไม่เข้าใจ";

      if (bmi < 18.5) {
        result = "คุณผอมไป กินข้าวบ้างนะ";
      } else if (bmi >= 18.5 && bmi <= 22.9) {
        result = "คุณหุ่นดีจุงเบย";
      } else if (bmi >= 23 && bmi <= 24.9) {
        result = "คุณเริ่มจะท้วมแล้วนะ";
      } else if ((bmi >= 25.8) & (bmi <= 29.9)) {
        result = "คุณอ้วนละ ออกกำลังกายหน่อยนะ";
      } else if (bmi > 30) {
        result = "คุณอ้วนเกินไปละ หาหมอเหอะ";
      }
      const flexMessage = {
        type: "flex",
        altText: "Flex Message",
        contents: {
          type: "bubble",
          hero: {
            type: "image",
            url: "https://bucket.ex10.tech/images/0503598d-441f-11ef-891c-0242ac120003/originalContentUrl.jpg",
            size: "full",
            aspectRatio: "20:13",
            aspectMode: "cover",
            action: {
              type: "uri",
              uri: "https://line.me/",
            },
          },
          body: {
            type: "box",
            layout: "vertical",
            contents: [
              {
                type: "text",
                text: "Bml",
                weight: "bold",
                size: "xl",
              },
              {
                type: "box",
                layout: "baseline",
                margin: "md",
                contents: [
                  {
                    type: "text",
                    type: "height:" + height * 100 + "cm",
                    text: "ส่วนสูงของคุณคือ 165 เซนติเมตร",
                    size: "sm",
                    color: "#999999",
                    margin: "md",
                  },
                ],
              },
              {
                type: "box",
                layout: "vertical",
                margin: "lg",
                spacing: "sm",
                contents: [
                  {
                    type: "box",
                    layout: "baseline",
                    spacing: "sm",
                    contents: [
                      {
                        type: "text",
                        text: "น้ำหนักของคุณคือ 60 กิโลกรัม",
                        color: "#aaaaaa",
                        size: "sm",
                        margin: "md",
                      },
                    ],
                  },
                  {
                    type: "box",
                    layout: "baseline",
                    spacing: "sm",
                    contents: [
                      {
                        type: "text",
                        text: "BML:26.50",
                        color: "#38A210",
                        size: "xl",
                        margin: "sm",
                        weight: "bold",
                        style: "normal",
                        align: "center",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          footer: {
            type: "box",
            layout: "vertical",
            spacing: "sm",
            contents: [
              {
                type: "button",
                style: "link",
                height: "sm",
                action: {
                  type: "uri",
                  label: "รายละเอียด",
                  uri: "https://bucket.ex10.tech/images/0503598d-441f-11ef-891c-0242ac120003/originalContentUrl.jpg",
                },
                color: "#F12101",
              },
              {
                type: "box",
                layout: "vertical",
                contents: [],
                margin: "sm",
              },
            ],
          },
        },
      };

      let payload = new Payload("LINE", flexMessage, { sendAsMessage: true });
      agent.add(payload);

      //agent.add(result);
    }
    let intentMap = new Map();
    intentMap.set("Default Welcome Intent", welcome);
    intentMap.set("Default Fallback Intent", fallback);
    intentMap.set("BMI - custom - yes", bodyMassIndex);
    agent.handleRequest(intentMap);
  };
app.listen(port, () => {
  console.log("Server is running at http://localhost:" + port);
});
