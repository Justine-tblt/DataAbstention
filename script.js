//GRAPHIQUE

fetch('data.json')
  .then(response => response.json())
  .then(data => {

    const table = document.getElementById('table-abstention');

    // tableau
    data.donnees.forEach(item => {
      const row = document.createElement('tr');
      const annee = document.createElement('td');
      const taux = document.createElement('td');

      annee.textContent = item.annee;
      taux.textContent = item.taux_abstention;

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
          label: 'Taux d\'abstention(%)',
          data: values,
          fill: true, 
          borderColor: '#3A5BC7', 
          backgroundColor: 'rgb(209, 52, 21, 0.2)',
          borderWidth: 3, 
          pointBackgroundColor: '#fdf1f1',
          pointRadius: 8,
          pointHoverRadius:7, 
          pointHoverBackgroundColor: '#D13415' 
        }]
      },
      options: {
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
        onHover: (event, chartElement) => {
          const targetCanvas = event.native.target;
          if (chartElement.length) {
            targetCanvas.style.cursor = 'pointer';
          } else {
            targetCanvas.style.cursor = 'default';
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


//Afficher les remarques de la carte interactive
  document.getElementById('comments-button').addEventListener('click', function() {
    const comments = document.getElementById('comments');
    if (comments.style.display === 'none' || comments.style.display === '') {
        comments.style.display = 'flex';
    } else {
        comments.style.display = 'none';
    }
});


// APPARITION AU DÉFILEMENT
const ratio = .1;
const options = {
    root: null,
    rootMargin: '0px',
    threshold: .1
};

const handleIntersect = function(entries, observer) {
    entries.forEach(function(entry) {
        if (entry.intersectionRatio > ratio) {
            // Détermine la classe à appliquer dynamiquement
            if (entry.target.classList.contains('reveal-left')) {
                entry.target.classList.add('reveal-left-visible');
            } else if (entry.target.classList.contains('reveal-right')) {
                entry.target.classList.add('reveal-right-visible');
            } else if (entry.target.classList.contains('reveal-bottom')) {
                entry.target.classList.add('reveal-bottom-visible');
            }
            observer.unobserve(entry.target); // Arrête d'observer
        }
    });
};

const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('.reveal').forEach(function(r) {
    observer.observe(r);
});
