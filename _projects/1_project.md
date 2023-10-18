---
layout: page
title: Hate Speech Detection in Tweets
description: Code developed for my Bachelor's final graduation work entitled "Comparison of deep learning models in the classification of comments containing hate speech on the Internet".
img: assets/img/hate_speech2.jpeg
importance: 1
category: work
related_publications: hatespeech2021
---

The dataset was taken from the Analytics Vidhya website and consists of two files: the training file, used to train the model, and the test file, used to evaluate the model in the official competition hosted on the website.

Experiments were also carried out with and without balancing the data (using the oversampling technique) and with pre-processing in order to see if there is any improvement in the models developed.

The deep learning algorithms used were: Convolutional Neural Network (CNN) and Long Short-Term Memory (LSTM).

Two seeds were used so that the results could be reproduced again and faithfully compared with each other (without worrying about the random initialization of the model variables): 23 and 2109.

The use of the data balancing technique generated improvements in the models tested, unlike pre-processing. The best model, both in terms of execution time and evaluation on validation and test data, was LSTM.

The developed code can be found <a href="https://github.com/rafaelgreca/TFG">here</a> (was written in Brazilian Portuguese)!