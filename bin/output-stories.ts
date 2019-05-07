import { configure, getStorybook } from "@storybook/react"
import glob from 'glob';
import path from 'path';
import fs from 'fs';

require.extensions[".svg"] = () => 1
require.extensions[".css"] = () => 1

function loadStories() {
  glob.sync( './src/components/*/stories.tsx' ).forEach( function( file ) {
    require( path.resolve( file ) );
  });
}

configure(loadStories, module);

const stories = getStorybook().reduce((currentStories, story) => {
  currentStories[story.kind] = story.stories;
  return currentStories;
},{});

fs.writeFileSync('stories.json', JSON.stringify(stories));
