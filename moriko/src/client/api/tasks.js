export const getAll = async () => {
    const response = await fetch('/api/tasks');
    return await response.json();
};
