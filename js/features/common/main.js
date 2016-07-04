/**
 *  Entrance of common service
 *
 *
 *  @author  liuyang
 *  @date    Jul 4, 2016
 *
 */

import logical from './logical/main';
import ui from './ui/main';

export default [...logical, ...ui];
