
        $(document).ready(function () {
            // Add click event listeners to your buttons
            $('#side1').on('click', function () {
                // Change the src attribute of the iframe for button 1
                $('#iframe1').attr('src', '/userInformation.html');
            });

            $('#side2').on('click', function () {
                // Change the src attribute of the iframe for button 2
                $('#iframe1').attr('src', '/codeInquiry.html');
            });

            $('#side3').on('click', function () {
                // Change the src attribute of the iframe for button 2
                $('#iframe1').attr('src', '/codeRegistry.html');
            });

            $('#side4').on('click', function () {
                // Change the src attribute of the iframe for button 2
                $('#iframe1').attr('src', '/dataChart.html');
            });

            // Your existing JavaScript code...
        });
