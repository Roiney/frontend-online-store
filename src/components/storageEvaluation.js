if (!JSON.parse(localStorage.getItem('avaliacoes'))) {
  localStorage.setItem('avaliacoes', JSON.stringify([]));
}

export const readSavedEvaluations = () => JSON
  .parse(localStorage.getItem('avaliacoes'));

export const saveEvaluation = (evaluation) => {
  const savedEvaluations = readSavedEvaluations();
  localStorage.setItem('avaliacoes', JSON.stringify([...savedEvaluations, evaluation]));
};
