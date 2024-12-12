// GRAPHIQUE ET TABLEAU - ÉVOLUTION DU TAUX D"ABSTENTION

fetch("data-graphic.json")
    .then(response => response.json())
    .then(data => {
        const table = document.getElementById("table-abstention");

        // tableau
        data.donnees.forEach(item => {
            const row = document.createElement("tr");
            const annee = document.createElement("td");
            const taux = document.createElement("td");

            annee.textContent = item.annee;
            taux.textContent = item.taux_abstention;

            row.appendChild(annee);
            row.appendChild(taux);
            table.appendChild(row);
        });

        const years = data.donnees.map(item => item.annee);
        const values = data.donnees.map(item => item.taux_abstention);

        //graphique
        const config = {
            type: "line",
            data: {
                labels: years,
                datasets: [{
                    label: "Taux d\"abstention(%)",
                    data: values,
                    fill: true,
                    borderColor: "#3A5BC7",
                    backgroundColor: "rgb(209, 52, 21, 0.2)",
                    pointBackgroundColor: "#fdf1f1",
                    pointRadius: 8,
                    pointHoverRadius: 7,
                    pointHoverBackgroundColor: "#D13415",
                    borderWidth: 3,
                }]
            },
            options: {
                plugins: {
                    legend: {
                        position: "bottom",
                        align: "end",
                    },
                    title: {
                        display: true,
                        text: data.titre,
                        font: {
                            size: 18,
                        }
                    }
                },
                onHover: (event, chartElement) => {
                    const cursorpointer = event.native.target;
                    if (chartElement.length) {
                        cursorpointer.style.cursor = "pointer";
                    } else {
                        cursorpointer.style.cursor = "default";
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: "Année",
                            font: {
                                size: 18,
                            }
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: "Taux d\"abstention (%)",
                            font: {
                                size: 18,
                            }
                        },
                        min: 0,
                        ticks: {
                            stepSize: 5,
                        }
                    }
                }
            }
        };

        const ctx = document.getElementById("evolution-abstention").getContext("2d");
        new Chart(ctx, config);
    })

