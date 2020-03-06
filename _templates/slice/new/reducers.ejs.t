---
inject: true
to: src/store/reducers.ts
after: combineReducers\(\{
skip_if: <%= false %>,
---
  <%= name.toLowerCase() %>,