function calculateAge() {
    // Get the user's date of birth
    var dob = document.getElementById("dob").value;
    var dobDate = new Date(dob);

    // Get today's date
    var today = new Date();

    // Calculate the difference in years, months, and days
    var ageYears = today.getFullYear() - dobDate.getFullYear();
    var ageMonths = today.getMonth() - dobDate.getMonth();
    var ageDays = today.getDate() - dobDate.getDate();

    // Adjust the age if the current month is earlier than the birth month
    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
        ageYears--;
        ageMonths += 12;
    }

    // Adjust the age if the current day is earlier than the birth day
    if (ageDays < 0) {
        ageMonths--;
        var lastMonthDate = new Date(today.getFullYear(), today.getMonth(), 0);
        ageDays += lastMonthDate.getDate();
    }

    // Display the result
    document.getElementById("result").innerText = "Your age is: " + ageYears + " years, " + ageMonths + " months, and " + ageDays + " days.";
}
