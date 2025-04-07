import { createEvent, createStore, sample } from 'effector';

export const getModels = createEvent();
export const $allModels = createStore(null).on(getModels, (_, models) => models);

export const postQuestion = createEvent();
export const $postQuestion = createStore('').on(postQuestion, (_, question) => question);

export const responseReceived = createEvent();
export const $responseReceived = createStore('').on(responseReceived, (_, answer) => answer);


$postQuestion.watch(($models) => {
  console.log("$postQuestion-effector", $models);
});
$postQuestion.watch(($responseReceived) => {
  console.log("$responseReceived-effector", $responseReceived);
});



