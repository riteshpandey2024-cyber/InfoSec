// ═══ SCRIPTS ════════════════════════════════════════════════════════════ 

       /* ── TAB SWITCHER  ─────────────────────────────────────────────────────────────────── */
      const chartInited = {};
      function show(id, btn) {
        document
          .querySelectorAll(".panel")
          .forEach((p) => p.classList.remove("active"));
        document
          .querySelectorAll(".tab-btn")
          .forEach((b) => b.classList.remove("active"));
        document.getElementById("panel-" + id).classList.add("active");
        btn.classList.add("active");
        if (!chartInited[id]) {
          initChart(id);
          chartInited[id] = true;
        }
      }

      /* ── DATA ─────────────────────────────────────────────────────────────────── */
      const riskData = [
        {
          n: "APT",
          a: "IP / Data",
          L: 8,
          V: 10,
          CM: 35,
          U: 9,
          score: 61.0,
          level: "CRITICAL",
        },
        {
          n: "Zero-Day Exploits",
          a: "Critical Infrastructure",
          L: 7,
          V: 9,
          CM: 20,
          U: 9,
          score: 59.4,
          level: "CRITICAL",
        },
        {
          n: "Supply Chain Attack",
          a: "Software/Infrastructure",
          L: 7,
          V: 10,
          CM: 30,
          U: 9,
          score: 57.9,
          level: "CRITICAL",
        },
        {
          n: "Ransomware",
          a: "Data / Operations",
          L: 9,
          V: 9,
          CM: 40,
          U: 8,
          score: 56.6,
          level: "CRITICAL",
        },
        {
          n: "Cloud Misconfiguration",
          a: "Cloud Services/Data",
          L: 8,
          V: 9,
          CM: 45,
          U: 7,
          score: 42.6,
          level: "HIGH",
        },
        {
          n: "Insider Threat",
          a: "IP / Data",
          L: 7,
          V: 9,
          CM: 50,
          U: 8,
          score: 39.5,
          level: "HIGH",
        },
        {
          n: "Phishing",
          a: "User Credentials",
          L: 9,
          V: 8,
          CM: 55,
          U: 6,
          score: 38.2,
          level: "HIGH",
        },
        {
          n: "Spear Phishing",
          a: "User Credentials",
          L: 8,
          V: 8,
          CM: 50,
          U: 6,
          score: 38.0,
          level: "HIGH",
        },
        {
          n: "API Vulnerabilities",
          a: "Data / Applications",
          L: 7,
          V: 8,
          CM: 50,
          U: 6,
          score: 34.0,
          level: "MEDIUM",
        },
        {
          n: "IoT Exploitation",
          a: "Network Infrastructure",
          L: 7,
          V: 7,
          CM: 45,
          U: 7,
          score: 33.95,
          level: "MEDIUM",
        },
        {
          n: "Worms",
          a: "Network Infrastructure",
          L: 7,
          V: 8,
          CM: 55,
          U: 6,
          score: 31.2,
          level: "MEDIUM",
        },
        {
          n: "Credential Stuffing",
          a: "User Credentials",
          L: 8,
          V: 7,
          CM: 55,
          U: 6,
          score: 31.2,
          level: "MEDIUM",
        },
        {
          n: "SQL Injection",
          a: "Data / Databases",
          L: 8,
          V: 8,
          CM: 60,
          U: 5,
          score: 30.6,
          level: "MEDIUM",
        },
        {
          n: "MitM",
          a: "Network / Data",
          L: 6,
          V: 8,
          CM: 60,
          U: 6,
          score: 28.8,
          level: "MEDIUM",
        },
        {
          n: "Trojans",
          a: "Data / Financial",
          L: 7,
          V: 8,
          CM: 60,
          U: 5,
          score: 27.6,
          level: "MEDIUM",
        },
        {
          n: "Spyware",
          a: "Data / IP",
          L: 7,
          V: 8,
          CM: 60,
          U: 5,
          score: 27.6,
          level: "MEDIUM",
        },
        {
          n: "DNS Spoofing",
          a: "Network Infrastructure",
          L: 6,
          V: 7,
          CM: 55,
          U: 6,
          score: 24.9,
          level: "MEDIUM",
        },
        {
          n: "XSS",
          a: "User Credentials/Data",
          L: 7,
          V: 7,
          CM: 60,
          U: 5,
          score: 24.6,
          level: "MEDIUM",
        },
        {
          n: "DDoS",
          a: "Network Infrastructure",
          L: 8,
          V: 7,
          CM: 65,
          U: 6,
          score: 25.6,
          level: "MEDIUM",
        },
        {
          n: "Password Attacks",
          a: "User Credentials",
          L: 8,
          V: 7,
          CM: 70,
          U: 4,
          score: 20.8,
          level: "MEDIUM",
        },
        {
          n: "Rootkit",
          a: "Servers / OS",
          L: 5,
          V: 8,
          CM: 60,
          U: 6,
          score: 22.0,
          level: "MEDIUM",
        },
        {
          n: "Social Media Exploit.",
          a: "Credentials / Data",
          L: 6,
          V: 6,
          CM: 55,
          U: 5,
          score: 21.2,
          level: "MEDIUM",
        },
        {
          n: "Keylogger",
          a: "User Credentials/Data",
          L: 6,
          V: 7,
          CM: 65,
          U: 5,
          score: 19.7,
          level: "LOW",
        },
        {
          n: "Vishing",
          a: "User Credentials",
          L: 6,
          V: 7,
          CM: 65,
          U: 5,
          score: 19.7,
          level: "LOW",
        },
        {
          n: "Physical Security Breach",
          a: "Physical Assets/Data",
          L: 5,
          V: 7,
          CM: 60,
          U: 5,
          score: 19.0,
          level: "LOW",
        },
      ];

      const spendingData = {
        APT: 6,
        "Zero-Day Exploits": 12,
        "Supply Chain Attack": 46,
        Ransomware: 20,
        "Cloud Misconfiguration": 4.1,
        "Insider Threat": 3.8,
        Phishing: 8.6,
        "Spear Phishing": 2.0,
        "API Vulnerabilities": 3.6,
        "IoT Exploitation": 6.7,
        Worms: 5.0,
        "Credential Stuffing": 1.2,
        "SQL Injection": 6.5,
        MitM: 2.5,
        Trojans: 3.5,
        Spyware: 2.5,
        "DNS Spoofing": 1.2,
        XSS: 2.0,
        DDoS: 2.7,
        "Password Attacks": 1.5,
        Rootkit: 2.0,
        "Social Media Exploit.": 0.8,
        Keylogger: 1.5,
        Vishing: 1.0,
        "Physical Security Breach": 3.2,
      };

      const years = [
        2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024,
      ];

      const attackTypes = [
        "Phishing/Social Eng.",
        "Ransomware",
        "Malware (General)",
        "DDoS",
        "Web App Attacks",
        "Insider Threats",
        "Supply Chain",
        "Credential Theft",
        "APT/Espionage",
        "IoT Attacks",
        "BEC",
        "Cloud Attacks",
        "Zero-Day",
        "Mobile Threats",
        "Cryptojacking",
      ];

      const trendData = {
        "Phishing/Social Eng.": [18, 20, 22, 23, 25, 28, 30, 29, 31, 32],
        Ransomware: [3, 5, 9, 10, 10, 14, 16, 17, 15, 14],
        "Malware (General)": [22, 20, 18, 17, 16, 14, 12, 11, 10, 9],
        DDoS: [12, 11, 10, 9, 8, 7, 6, 6, 5, 5],
        "Web App Attacks": [10, 10, 11, 12, 12, 11, 10, 10, 10, 9],
        "Insider Threats": [8, 7, 7, 7, 6, 6, 6, 7, 7, 7],
        "Supply Chain": [1, 1, 2, 2, 2, 3, 5, 6, 7, 8],
        "Credential Theft": [8, 8, 8, 8, 8, 8, 7, 7, 7, 7],
        "APT/Espionage": [5, 5, 4, 4, 4, 4, 4, 4, 4, 4],
        "IoT Attacks": [1, 2, 3, 4, 4, 4, 4, 4, 4, 4],
        BEC: [2, 3, 3, 4, 5, 5, 5, 5, 5, 5],
        "Cloud Attacks": [1, 2, 2, 2, 3, 4, 5, 6, 7, 8],
        "Zero-Day": [4, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        "Mobile Threats": [4, 4, 4, 5, 5, 5, 5, 5, 5, 5],
        Cryptojacking: [0, 1, 2, 3, 2, 2, 2, 1, 1, 1],
      };

      const lineColors = [
        "#FF6B35",
        "#E63946",
        "#457B9D",
        "#1D3557",
        "#2A9D8F",
        "#E9C46A",
        "#F4A261",
        "#264653",
        "#6A4C93",
        "#52796F",
        "#A8DADC",
        "#06D6A0",
        "#118AB2",
        "#FFB703",
        "#B5838D",
      ];

      const levelColors = {
        CRITICAL: "#FF4444",
        HIGH: "#FF8C00",
        MEDIUM: "#E8A800",
        LOW: "#70AD47",
      };

      const pie2024 = attackTypes.map((t) =>
        trendData[t] ? trendData[t][9] : 0,
      );


      /* ── CHART BUILDERS ───────────────────────────────────────────────────────── */
      function makeBarChart(id) {
        const ctx = document.getElementById(id);
        if (!ctx) return;
        new Chart(ctx, {
          type: "bar",
          data: {
            labels: riskData.map((d) => d.n),
            datasets: [
              {
                label: "Risk Score",
                data: riskData.map((d) => d.score),
                backgroundColor: riskData.map(
                  (d) => levelColors[d.level] + "CC",
                ),
                borderColor: riskData.map((d) => levelColors[d.level]),
                borderWidth: 1.5,
                borderRadius: 4,
              },
            ],
          },
          options: {
            indexAxis: "y",
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              tooltip: {
                callbacks: {
                  label: (c) =>
                    ` Risk: ${c.parsed.x} (${riskData[c.dataIndex].level})`,
                },
              },
            },
            scales: {
              x: {
                title: {
                  display: true,
                  text: "Risk Score",
                  font: { size: 10, weight: "bold" },
                  color: "#1F3864",
                },
                min: 0,
                max: 70,
              },
              y: { ticks: { font: { size: 8.5 } } },
            },
          },
        });
      }

      function makePieChart(id) {
        const ctx = document.getElementById(id);
        if (!ctx) return;
        new Chart(ctx, {
          type: "doughnut",
          data: {
            labels: attackTypes,
            datasets: [
              {
                data: pie2024,
                backgroundColor: lineColors,
                borderWidth: 2,
                hoverOffset: 10,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: "right",
                labels: { font: { size: 8.5 }, boxWidth: 11, padding: 5 },
              },
              tooltip: {
                callbacks: { label: (c) => ` ${c.label}: ${c.parsed}%` },
              },
            },
          },
        });
      }

      function makeLineChart() {
        const ctx = document.getElementById("lineChart");
        if (!ctx) return;
        const highlight = new Set([
          "Phishing/Social Eng.",
          "Ransomware",
          "Supply Chain",
          "Cloud Attacks",
        ]);
        new Chart(ctx, {
          type: "line",
          data: {
            labels: years,
            datasets: attackTypes.map((t, i) => ({
              label: t,
              data: trendData[t],
              borderColor: lineColors[i],
              backgroundColor: lineColors[i] + "20",
              tension: 0.35,
              borderWidth: highlight.has(t) ? 2.8 : 1.3,
              borderDash: highlight.has(t) ? [] : [5, 4],
              pointRadius: 3,
              fill: false,
              order: highlight.has(t) ? 0 : 1,
            })),
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: "bottom",
                labels: { font: { size: 8 }, boxWidth: 11, padding: 7 },
              },
              tooltip: { mode: "index", intersect: false },
            },
            scales: {
              x: {
                title: {
                  display: true,
                  text: "Year",
                  font: { size: 10, weight: "bold" },
                  color: "#1F3864",
                },
              },
              y: {
                title: {
                  display: true,
                  text: "% of Reported Incidents",
                  font: { size: 10, weight: "bold" },
                  color: "#1F3864",
                },
                min: 0,
                max: 40,
              },
            },
          },
        });
      }

      function makeScatterChart() {
        const ctx = document.getElementById("scatterChart");
        if (!ctx) return;
        const catColor = {
          "IP / Data": "#E74C3C",
          "Critical Infrastructure": "#9B59B6",
          "Software/Infrastructure": "#F39C12",
          "Data / Operations": "#C0392B",
          "Cloud Services/Data": "#2980B9",
          "User Credentials": "#3498DB",
          "Data / Applications": "#27AE60",
          "Network Infrastructure": "#1ABC9C",
          "Data / Databases": "#16A085",
          "Data / Financial": "#D35400",
          "Data / IP": "#8E44AD",
          "Network / Data": "#2E86AB",
          "Servers / OS": "#7F8C8D",
          "Credentials / Data": "#BDC3C7",
          "User Credentials/Data": "#A8D8EA",
          "Physical Assets/Data": "#95A5A6",
        };
        const pts = riskData.map((d) => ({
          x: d.score,
          y: spendingData[d.n] || 1,
          label: d.n,
          color: catColor[d.a] || "#7F8C8D",
        }));
        new Chart(ctx, {
          type: "scatter",
          data: {
            datasets: [
              {
                label: "Threats",
                data: pts.map((p) => ({ x: p.x, y: p.y })),
                backgroundColor: pts.map((p) => p.color + "BB"),
                borderColor: pts.map((p) => p.color),
                pointRadius: 7,
                pointHoverRadius: 10,
                borderWidth: 2,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              tooltip: {
                callbacks: {
                  label: (c) =>
                    `${pts[c.dataIndex].label}  |  Risk: ${c.parsed.x}  |  Spend: $${c.parsed.y}B`,
                },
              },
            },
            scales: {
              x: {
                title: {
                  display: true,
                  text: "Risk Score",
                  font: { size: 10, weight: "bold" },
                  color: "#1F3864",
                },
                min: 15,
                max: 70,
              },
              y: {
                title: {
                  display: true,
                  text: "Security Spending ($B)",
                  font: { size: 10, weight: "bold" },
                  color: "#1F3864",
                },
                min: 0,
              },
            },
          },
        });
      }

      function makeStackedChart() {
        const ctx = document.getElementById("stackedChart");
        if (!ctx) return;
        const keys = Object.keys(trendData);
        new Chart(ctx, {
          type: "bar",
          data: {
            labels: years,
            datasets: keys.map((t, i) => ({
              label: t,
              data: trendData[t],
              backgroundColor: lineColors[i % lineColors.length],
              borderWidth: 0,
            })),
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: "bottom",
                labels: { font: { size: 8 }, boxWidth: 11, padding: 7 },
              },
            },
            scales: {
              x: {
                stacked: true,
                title: {
                  display: true,
                  text: "Year",
                  font: { size: 10, weight: "bold" },
                  color: "#1F3864",
                },
              },
              y: {
                stacked: true,
                title: {
                  display: true,
                  text: "% of All Incidents",
                  font: { size: 10, weight: "bold" },
                  color: "#1F3864",
                },
                max: 110,
              },
            },
          },
        });
      }

      function makeHeatmap() {
        const defenses = [
          "MFA",
          "EDR/XDR",
          "WAF",
          "SIEM",
          "Network Seg.",
          "Patch Mgmt",
          "DLP",
          "Zero Trust",
          "Pen Testing",
          "Awareness",
          "CSPM",
          "Vendor Risk",
        ];
        const matrix = [
          [3, 2, 0, 3, 1, 1, 1, 3, 1, 2, 0, 0],
          [0, 1, 2, 2, 1, 3, 0, 1, 3, 0, 0, 0],
          [0, 1, 1, 2, 1, 2, 0, 2, 2, 0, 0, 3],
          [1, 3, 0, 2, 2, 3, 1, 2, 2, 2, 0, 0],
          [1, 1, 1, 2, 0, 2, 2, 3, 2, 1, 3, 0],
          [2, 2, 0, 3, 2, 1, 3, 3, 1, 3, 0, 1],
          [3, 1, 2, 2, 0, 0, 0, 2, 1, 3, 0, 0],
          [3, 1, 1, 2, 0, 0, 0, 2, 1, 3, 0, 0],
          [1, 1, 3, 2, 1, 2, 0, 2, 3, 1, 0, 0],
          [0, 2, 1, 2, 3, 2, 0, 2, 2, 0, 0, 0],
          [0, 3, 0, 3, 3, 3, 0, 2, 1, 0, 0, 0],
          [3, 2, 0, 2, 0, 0, 0, 2, 1, 2, 0, 0],
          [0, 1, 3, 1, 0, 1, 0, 1, 3, 1, 0, 0],
          [2, 1, 3, 2, 1, 1, 0, 2, 2, 0, 0, 0],
          [0, 3, 0, 2, 2, 2, 0, 2, 2, 1, 0, 0],
          [0, 3, 0, 2, 1, 2, 1, 2, 2, 0, 0, 0],
          [0, 0, 2, 2, 2, 2, 0, 2, 2, 0, 0, 0],
          [0, 1, 3, 1, 0, 0, 0, 1, 3, 1, 0, 0],
          [0, 0, 0, 2, 2, 1, 0, 2, 1, 0, 0, 0],
          [3, 2, 0, 1, 0, 0, 0, 2, 1, 2, 0, 0],
          [0, 3, 0, 2, 1, 2, 0, 2, 1, 0, 0, 0],
          [2, 0, 0, 2, 0, 0, 2, 2, 1, 2, 0, 0],
          [0, 3, 0, 2, 0, 0, 0, 1, 1, 0, 0, 0],
          [1, 0, 0, 1, 0, 0, 0, 1, 0, 3, 0, 0],
          [0, 0, 0, 1, 0, 0, 0, 1, 2, 2, 0, 0],
        ];
        const bg = ["#F0F4F8", "#BDD7EE", "#5BA3D0", "#1F3864"];
        const lbl = ["None", "Low", "Med", "High"];
        const txtC = ["#555", "#333", "#fff", "#fff"];
        const names = riskData.map((d) => d.n);
        let html = `<table style="border-collapse:collapse;font-size:.73rem;width:100%;min-width:760px">
    <thead><tr>
      <th style="background:#1F3864;color:#fff;padding:7px 10px;text-align:left;white-space:nowrap;min-width:155px">Threat</th>
      ${defenses.map((d) => `<th style="background:#1F3864;color:#fff;padding:4px 3px;text-align:center;writing-mode:vertical-rl;transform:rotate(180deg);height:82px;font-size:.68rem;min-width:50px">${d}</th>`).join("")}
    </tr></thead><tbody>`;
        matrix.forEach((row, ri) => {
          const rb = ri % 2 === 0 ? "#fff" : "#F5F8FC";
          html += `<tr><td style="padding:5px 10px;font-weight:600;background:${rb};white-space:nowrap">${names[ri]}</td>`;
          row.forEach((v) => {
            html += `<td style="background:${bg[v]};text-align:center;padding:6px 3px;border:1px solid #E8EEF5;color:${txtC[v]};font-weight:700;font-size:.68rem">${lbl[v]}</td>`;
          });
          html += "</tr>";
        });
        html += `</tbody></table>
  <div style="margin-top:10px;display:flex;gap:16px;flex-wrap:wrap;font-size:.77rem">
    ${lbl
      .map(
        (l, i) => `<span style="display:flex;align-items:center;gap:4px">
      <span style="display:inline-block;width:14px;height:14px;background:${bg[i]};border:1px solid #ccc;border-radius:2px"></span>${l}
    </span>`,
      )
      .join("")}
  </div>`;
        document.getElementById("heatmapContainer").innerHTML = html;
      }

      function makeFullTable() {
        const tbody = document.getElementById("fullTableBody");
        riskData.forEach((d, i) => {
          tbody.innerHTML += `<tr>
      <td>${i + 1}</td>
      <td>${d.n}</td>
      <td style="font-size:.72rem;color:#555">${d.a}</td>
      <td>${d.L}</td><td>${d.V}</td><td>${d.CM}%</td><td>${d.U}</td>
      <td><strong style="color:${levelColors[d.level]}">${d.score}</strong></td>
      <td><span class="badge ${d.level}">${d.level}</span></td>
    </tr>`;
        });
      }

      function makePieTable() {
        const tbody = document.getElementById("pieTableBody");
        attackTypes
          .map((t, i) => ({ t, v: pie2024[i] }))
          .sort((a, b) => b.v - a.v)
          .forEach((item) => {
            tbody.innerHTML += `<tr><td>${item.t}</td><td>${item.v}%</td></tr>`;
          });
      }

      /* ── LAZY INIT ────────────────────────────────────────────────────────────── */
      function initChart(id) {
        switch (id) {
          case "overview":
            makeBarChart("barChartOverview");
            makePieChart("pieChartOverview");
            break;
          case "risk":
            makeBarChart("barChartFull");
            break;
          case "trends":
            makeLineChart();
            break;
          case "distribution":
            makePieChart("pieChartFull");
            makePieTable();
            break;
          case "spending":
            makeScatterChart();
            break;
          case "stacked":
            makeStackedChart();
            break;
          case "heatmap":
            makeHeatmap();
            break;
          case "table":
            makeFullTable();
            break;
        }
      }

      /* ── BOOT ─────────────────────────────────────────────────────── */
      window.addEventListener("load", () => {
        chartInited["overview"] = true;
        makeBarChart("barChartOverview");
        makePieChart("pieChartOverview");
      });
