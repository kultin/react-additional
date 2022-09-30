import { Story } from '@storybook/react';
import 'app/styles/index.scss';

export const StyleDecorator = (story: () => Story) => {
    console.log('DECORATOR');
    return story();
};

// export const StyleDecorator = (StoryComponent: Story) => (
//     <div>
//         <StoryComponent />
//     </div>
// );
