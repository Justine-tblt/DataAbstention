//GRAPHIQUE

fetch('data.json')
  .then(response => response.json())
  .then(data => {

    const table = document.getElementById('table-abstention');

    // Génération des lignes du tableau
    data.donnees.forEach(item => {
      const row = document.createElement('tr');
      const annee = document.createElement('td');
      const taux = document.createElement('td');

      annee.textContent = item.annee;
      taux.textContent = item.taux_abstention + item.unite;

      row.appendChild(annee);
      row.appendChild(taux);
      table.appendChild(row);
    });
  
    //Extraction des années et des taux d'abstention
    const years = data.donnees.map(item => item.annee);
    const values = data.donnees.map(item => item.taux_abstention); 

    //Configuration du graphique
    const config = {
      type: 'line',
      data: {
        labels: years, 
        datasets: [{
          label: 'Taux d\'abstention (%)',
          data: values,
          fill: true, 
          borderColor: '#3A5BC7', 
          backgroundColor: 'rgb(209, 52, 21, 0.2)',
          borderWidth: 3, 
          pointBackgroundColor: '#fdf1f1',
          pointRadius: 5,
          pointHoverRadius:7, 
          pointHoverBackgroundColor: '#D13415' 
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
            align: 'end',  
            labels: {
              font: {
                size: 14 
              }
            }
          },
          title: {
            display: true,
            text: data.titre, 
            font: {
              size: 18
            }
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Année',
              font: {
                size: 14
              }
            }
          },
          y: {
            title: {
              display: true,
              text: 'Taux d\'abstention (%)',
              font: {
                size: 14
              }
            },
            min: 0, 
            ticks: {
              stepSize: 10, 
            }
          }
        }
      }
    };



   
    const ctx = document.getElementById('evolution-abstention').getContext('2d');
    new Chart(ctx, config); 
  })



