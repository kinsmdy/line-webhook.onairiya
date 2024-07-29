const express = require("express");
const bodyParser = require("body-parser");
const { WebhookClient, Payload } = require("dialogflow-fulfillment");
const port = 4000;

//create server
const app = express();

//middleware
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("<h1>Welcome, this is a webhook for SE NPRU Line Chatbot !!!</h1>");
});

app.post("/webhook", (req, res) => {
  //create webhook client
  const agent = new WebhookClient({
    request: req,
    response: res,
  });

  // console.log(
  //     "Dialogflow Request headers: " + JSON.stringify(req.headers)
  // );
  console.log("Dialogflow Request body: " + JSON.stringify(req.body));

  function welcome(agent) {
    agent.add(`Welcome to my agent!`);
  }

  function fallback(agent) {
    agent.add(`I didn't understand`);
    agent.add(`I'm sorry, can you try again?`);
  }
  function calculatecircle(agent) {
    let r = agent.parameters.number;
    let pi = Math.PI.toFixed(2)
    let result = pi * r **2;
    let flexMessage = {
      type: "flex",
      altText: "Flex Message",
      contents: {
        "type": "bubble",
        "hero": {
          "type": "image",
          "size": "full",
          "aspectRatio": "20:13",
          "aspectMode": "cover",
          "action": {
            "type": "uri",
            "uri": "https://www.trueplookpanya.com/learning/detail/13431"
          },
          "url": "https://bucket.ex10.tech/images/1cc9c4e8-4d7e-11ef-891c-0242ac120003/originalContentUrl.png"
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "weight": "bold",
              "size": "xl",
              "text": "circle"
            },
            {
              "type": "box",
              "layout": "vertical",
              "margin": "lg",
              "spacing": "sm",
              "contents": [
                {
                  "type": "box",
                  "layout": "baseline",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "text",
                      "color": "#aaaaaa",
                      "size": "sm",
                      "text": " pi" + pi + "ซม. r" + r + "ซม."
                    }
                  ]
                },
                {
                  "type": "box",
                  "layout": "baseline",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "text",
                      "text": `${result.toFixed(2)} ตร.ซม.`,
                      "color": "#aaaaaa",
                      "size": "sm"
                    }
                  ]
                }
              ]
            }
          ]
        },
        "footer": {
          "type": "box",
          "layout": "vertical",
          "spacing": "sm",
          "contents": [
            {
              "type": "button",
              "style": "primary",
              "height": "sm",
              "action": {
                "type": "uri",
                "label": "WEBSITE",
                "uri": "https://www.trueplookpanya.com/learning/detail/13431"
              }
            },
            {
              "type": "box",
              "layout": "vertical",
              "contents": [],
              "margin": "sm"
            }
          ]
        }
      }
    }
    let payload = new Payload("LINE", flexMessage, { sendAsMessage: true });
    agent.add(payload);
  }
  function calculatetriangle(agent) {
    let base = agent.parameters.base;
    let height = agent.parameters.height;
    let result = 0.5 * base * height ;
    let flexMessage = {
      type: "flex",
      altText: "Flex Message",
      contents: {
        "type": "bubble",
        "hero": {
          "type": "image",
          "size": "full",
          "aspectRatio": "20:13",
          "aspectMode": "cover",
          "action": {
            "type": "uri",
            "uri": "https://www.trueplookpanya.com/learning/detail/13431"
          },
          "url": "https://bucket.ex10.tech/images/fa3ad476-4d7f-11ef-891c-0242ac120003/originalContentUrl.png"
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "weight": "bold",
              "size": "xl",
              "text": "triangle"
            },
            {
              "type": "box",
              "layout": "vertical",
              "margin": "lg",
              "spacing": "sm",
              "contents": [
                {
                  "type": "box",
                  "layout": "baseline",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "text",
                      "color": "#aaaaaa",
                      "size": "sm",
                      "text": `0.5 x ${base} x ${height}` 
                    }
                  ]
                },
                {
                  "type": "box",
                  "layout": "baseline",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "text",
                      "text": `${result.toFixed(2)} ตร.ซม.`,
                      "color": "#aaaaaa",
                      "size": "sm"
                    }
                  ]
                }
              ]
            }
          ]
        },
        "footer": {
          "type": "box",
          "layout": "vertical",
          "spacing": "sm",
          "contents": [
            {
              "type": "button",
              "style": "primary",
              "height": "sm",
              "action": {
                "type": "uri",
                "label": "WEBSITE",
                "uri": "https://www.trueplookpanya.com/learning/detail/13431"
              }
            },
            {
              "type": "box",
              "layout": "vertical",
              "contents": [],
              "margin": "sm"
            }
          ]
        }
      }
    }
    let payload = new Payload("LINE", flexMessage, { sendAsMessage: true });
    agent.add(payload);
  }
  function calculateArea(agent) {
    let wide = agent.parameters.wide;
    let lenght = agent.parameters.lenght;
    let result = wide * lenght;
    agent.add(
      "พื้นที่รูปสี่เหลี่ยม กว้าง" + wide + "ซม. ยาว" + lenght + "ซม." + result.toFixed(2) + "ตร.ซม."
    );
    let flexMessage = {
      type: "flex",
      altText: "Flex Message",
      contents: {
        "type": "bubble",
        "hero": {
          "type": "image",
          "size": "full",
          "aspectRatio": "20:13",
          "aspectMode": "cover",
          "action": {
            "type": "uri",
            "uri": "https://www.trueplookpanya.com/learning/detail/13431"
          },
          "url": "https://bucket.ex10.tech/images/5fa80b59-4d79-11ef-891c-0242ac120003/originalContentUrl.png"
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "weight": "bold",
              "size": "xl",
              "text": "rectangle"
            },
            {
              "type": "box",
              "layout": "vertical",
              "margin": "lg",
              "spacing": "sm",
              "contents": [
                {
                  "type": "box",
                  "layout": "baseline",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "text",
                      "color": "#aaaaaa",
                      "size": "sm",
                      "text": "กว้าง" + wide + "ซม. ยาว" + lenght + "ซม."
                    }
                  ]
                },
                {
                  "type": "box",
                  "layout": "baseline",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "text",
                      "text": `${result.toFixed(2)} ตร.ซม.`,
                      "color": "#aaaaaa",
                      "size": "sm"
                    }
                  ]
                }
              ]
            }
          ]
        },
        "footer": {
          "type": "box",
          "layout": "vertical",
          "spacing": "sm",
          "contents": [
            {
              "type": "button",
              "style": "primary",
              "height": "sm",
              "action": {
                "type": "uri",
                "label": "WEBSITE",
                "uri": "https://www.trueplookpanya.com/learning/detail/13431"
              }
            },
            {
              "type": "box",
              "layout": "vertical",
              "contents": [],
              "margin": "sm"
            }
          ]
        }
      }
    }
    let payload = new Payload("LINE", flexMessage, { sendAsMessage: true });
    agent.add(payload);
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
        header: {
          type: "box",
          layout: "vertical",
          contents: [
            {
              type: "text",
              text: "BMI Calculation Result",
              weight: "bold",
              size: "lg",
              align: "center",
            },
          ],
        },
        hero: {
          type: "image",
          url: "https://lirp.cdn-website.com/69c0b277/dms3rep/multi/opt/BMI+levels-1920w.jpg",
          size: "full",
          aspectRatio: "20:13",
          aspectMode: "cover",
        },
        body: {
          type: "box",
          layout: "vertical",
          contents: [
            {
              type: "text",
              text: "Your BMI Result",
              weight: "bold",
              size: "md",
              margin: "md",
            },
            {
              type: "text",
              text: "Height: " + height * 100 + " cm",
              size: "sm",
              margin: "sm",
            },
            {
              type: "text",
              text: "Weight: " + weight + " kg",
              size: "sm",
              margin: "sm",
            },
            {
              type: "separator",
              margin: "lg",
            },
            {
              type: "text",
              text: "BMI: " + bmi,
              weight: "bold",
              size: "xl",
              align: "center",
              margin: "lg",
              color: "#00b900",
            },
            {
              type: "text",
              text: result,
              align: "center",
              size: "sm",
              margin: "md",
            },
          ],
        },
        footer: {
          type: "box",
          layout: "vertical",
          contents: [
            {
              type: "button",
              action: {
                type: "uri",
                label: "รายละเอียดเพิ่มเติม",
                uri: "https://samitivejchinatown.com/th/article/health/BMI-calculator",
              },
              style: "primary",
              color: "#1DB446",
            },
          ],
        },
      },
    };

    let payload = new Payload("LINE", flexMessage, { sendAsMessage: true });
    agent.add(payload);
    // agent.add(result);
  }

  let intentMap = new Map();
  intentMap.set("Default Welcome Intent", welcome);
  intentMap.set("Default Fallback Intent", fallback);
  intentMap.set("BMI - custom - yes", bodyMassIndex);
  intentMap.set("area-rectangle - custom - yes", calculateArea);
  intentMap.set("area - circle - custom - yes", calculatecircle);
  intentMap.set("area - triangle - custom - yes", calculatetriangle);
  agent.handleRequest(intentMap);
});

app.listen(port, () => {
  console.log("Server is running at http://localhost:" + port);
});
