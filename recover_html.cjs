const fs = require('fs');
const readline = require('readline');

async function recoverHTML() {
  const fileStream = fs.createReadStream('C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\b2c9b6ba-f422-416f-b2a6-dab7b76ad675\\.system_generated\\logs\\transcript_full.jsonl');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let bestContent = "";
  let bestLength = 0;

  for await (const line of rl) {
    try {
      const entry = JSON.parse(line);
      // look for view_file response
      if (entry.tool_calls) {
        for (const tc of entry.tool_calls) {
          if (tc.tool_name === 'view_file' && tc.tool_response && tc.tool_response.output) {
            const out = tc.tool_response.output;
            if (out.includes('<section id="results"') || out.includes('<section id="services"')) {
              if (out.length > bestLength) {
                bestLength = out.length;
                bestContent = out;
              }
            }
          }
        }
      }
    } catch(e) {}
  }
  
  if (bestContent) {
    fs.writeFileSync('C:\\Users\\HP\\Documents\\All React Projects\\New-Commercekind\\recovered_html.txt', bestContent);
    console.log("HTML recovered successfully!");
  } else {
    console.log("HTML not found.");
  }
}

recoverHTML();
