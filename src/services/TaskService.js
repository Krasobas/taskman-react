const baseUrl = 'https://jsonplaceholder.typicode.com'; // Adjust this URL to your backend

export const fetchTasks = async (id) => {
    try {
        const response = await fetch(baseUrl + '/todos/?userId=' + id);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const tasks = await response.json();
        tasks.sort((a, b) => {
            if (a.completed && !b.completed) return 1;
            else if (!a.completed && b.completed) return -1;
            else return 0;
        });
        return tasks;
    } catch (error) {
        console.error("There was a problem with the fetch operation: ", error);
        throw error; // Rethrow to handle it in the calling component
    }
};