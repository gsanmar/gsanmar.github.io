 // Array para almacenar los votos de cada partido
 var votos = [0, 0, 0, 0, 0];
 var myChart = null;

 // Función para agregar un voto al partido seleccionado
 function vote(partido) {
   votos[partido]++;
   updateChart();
 }

 // Función para reiniciar los votos a 0
 function reset() {
   votos = [0, 0, 0, 0, 0];
   updateChart();
 }

 // Función para actualizar el gráfico
 function updateChart() {
   if (myChart) {
     myChart.destroy();
   }
   var ctx = document.getElementById('myChart').getContext('2d');
   myChart = new Chart(ctx, {
     type: 'doughnut',
     data: {
       labels: ['Socialistas', 'Liberales', 'Animalistas', 'Centristas', 'Ecologistas'],
       datasets: [{
         label: '# of Votes',
         data: votos,
         backgroundColor: [
           'rgba(255, 99, 132, 0.5)',
           'rgba(54, 162, 235, 0.5)',
           'rgba(255, 206, 86, 0.5)',
           'rgba(75, 192, 192, 0.5)',
           'rgba(153, 102, 255, 0.5)'
         ],
         borderColor: [
           'rgba(255, 99, 132, 1)',
           'rgba(54, 162, 235, 1)',
           'rgba(255, 206, 86, 1)',
           'rgba(75, 192, 192, 1)',
           'rgba(153, 102, 255, 1)'
         ],
         borderWidth: 1
       }]
     },
     options: {
       responsive: true,
       maintainAspectRatio: false,
       plugins: {
         legend: {
           display: true,
           position: 'right',
         }
       },
       scales: {
         y: {
           display: false // eje OFF
         }
       }
     }
   });
 }

 // Dibujar el gráfico inicial
 updateChart();