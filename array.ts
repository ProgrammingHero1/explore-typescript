const salary: number = 7500;
const friendSalaries: number[] = [7500, 12300, 17200, 9400, 8300];
const friends: string[] = ['Sakib', 'Rakib', 'Nakib', 'Dakib'];

friendSalaries[0] = 10500;
friendSalaries.push(13100);

// friendSalaries[4] = '9800';
// friendSalaries.push('7300');

friends.push('Bakib');
friends[2] = 'Qakib';

// friends.push(45800);



let max = 0;
for (const salary of friendSalaries) {
    if (salary > max) {
        max = salary;
    }
}