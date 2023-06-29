export function* callSaveTodoWorker(action) {
    const { handleEdit, todoInputEdit, showContent } = action.payload;
    yield handleEdit(todoInputEdit);
    yield showContent();
}