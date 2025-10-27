const isLeapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
};

const getDaysInMonth = (month, year) => {
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
  if (month === 2 && isLeapYear(year)) {
    return 29;
  }
  
  return daysInMonth[month - 1];
};

const isValidDate = (day, month, year) => {
  if (month < 1 || month > 12) return false;
  if (day < 1 || day > getDaysInMonth(month, year)) return false;
  if (year < 1900 || year > 2100) return false;
  
  return true;
};

const calculateAge = (birthDate, currentDate) => {
  let years = currentDate.getFullYear() - birthDate.getFullYear();
  let months = currentDate.getMonth() - birthDate.getMonth();
  let days = currentDate.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
    days += lastMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  if (years < 0) {
    throw new Error('Birthdate cannot be in the future.');
  }

  return { years, months, days };
};

export const calculateAgeFromAPI = async (birthdate) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        if (!birthdate || typeof birthdate !== 'string') {
          throw new Error('Birthdate is required.');
        }

        if (birthdate.trim() === '') {
          throw new Error('Birthdate cannot be empty.');
        }

        const parts = birthdate.split('/');
        if (parts.length !== 3) {
          throw new Error('Invalid date format. Please use DD/MM/YYYY format.');
        }

        const [dayStr, monthStr, yearStr] = parts;

        if (dayStr.length !== 2 || monthStr.length !== 2 || yearStr.length !== 4) {
          throw new Error('Invalid date format. Please use DD/MM/YYYY format.');
        }

        const day = Number.parseInt(dayStr, 10);
        const month = Number.parseInt(monthStr, 10);
        const year = Number.parseInt(yearStr, 10);

        if (Number.isNaN(day) || Number.isNaN(month) || Number.isNaN(year)) {
          throw new TypeError('Invalid date format. Please enter valid numbers.');
        }

        if (!isValidDate(day, month, year)) {
          throw new Error('Invalid date. Please check the day, month, and year.');
        }

        const birthDate = new Date(year, month - 1, day);
        
        if (
          birthDate.getDate() !== day ||
          birthDate.getMonth() !== month - 1 ||
          birthDate.getFullYear() !== year
        ) {
          throw new Error('Invalid date. Please check the day, month, and year.');
        }

        const today = new Date();
        if (birthDate > today) {
          throw new Error('Birthdate cannot be in the future.');
        }

        const minDate = new Date(1900, 0, 1);
        if (birthDate < minDate) {
          throw new Error('Birthdate cannot be before 1900.');
        }

        const age = calculateAge(birthDate, today);

        if (age.years > 150) {
          throw new Error('Please verify your birthdate. Age seems unusually high.');
        }

        resolve(age);

      } catch (error) {
        reject(error);
      }
    }, 500); //network delay simulation
  });
};

export const formatAge = (age) => {
  if (!age || typeof age !== 'object') {
    return 'Invalid age data';
  }

  const { years, months, days } = age;
  
  const parts = [];
  if (years > 0) parts.push(`${years} year${years === 1 ? '' : 's'}`);
  if (months > 0) parts.push(`${months} month${months === 1 ? '' : 's'}`);
  if (days > 0) parts.push(`${days} day${days === 1 ? '' : 's'}`);
  
  if (parts.length === 0) {
    return 'Less than a day';
  }
  
  return parts.join(', ');
};

export const getTotalDays = (age) => {
  if (!age || typeof age !== 'object') {
    return 0;
  }

  const { years, months, days } = age;
  return (years * 365) + (months * 30) + days;
};

// src/services/ageService.js
// src/services/ageService.js
const API_BASE_URL =  "https://age-calc-poc-bckend.onrender.com";

function formatDateForAPI(dateStr) {
  if (!dateStr) throw new Error("Date is required");


  const cleanDate = dateStr.trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(cleanDate)) return cleanDate; 

 
  const parts = cleanDate.split("/");
  if (parts.length !== 3) throw new Error("Invalid date format (use DD/MM/YYYY)");

  const [day, month, year] = parts.map((p) => p.padStart(2, "0"));
  if (!day || !month || !year) throw new Error("Incomplete date");

  return `${year}-${month}-${day}`;
}

export const calculateAgeAPI = async (birthdate) => {
  try {
    const formattedDate = formatDateForAPI(birthdate);

    const response = await fetch(`${API_BASE_URL}/api/calculate-age`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ dob: formattedDate }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API Error: ${errorText || response.statusText}`);
    }

    return await response.json();
  } catch (err) {
    console.error("Error calling age API:", err);
    throw new Error("Failed to calculate age. Please check the date format.");
  }
};