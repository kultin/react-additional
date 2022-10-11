// import 'app/styles/index.scss';
// import { Story } from '@storybook/react';
// // import styles from '../../../../app/styles/index.scss';

// export const StyleDecorator = (story: () => Story) => {
//     console.log('DECORATOR');
//     return story();
// };

// export const StyleDecorator = (StoryComponent: Story) => (
//     <div className={`${styles}`}>
//         <StoryComponent />
//     </div>
// );

import 'app/styles/index.scss';
import { Story } from '@storybook/react';

export const StyleDecorator = (story: () => Story) => story();
