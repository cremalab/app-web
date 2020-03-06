---
inject: true
to: src/store/reducers.ts
after: "@reduxjs/toolkit"
---
import { reducer as <%= name %> } from "./<%= name %>"