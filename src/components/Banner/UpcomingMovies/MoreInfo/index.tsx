// import { useTouchable, withTouchable } from 'components/Touchable';
import { useComputedStyles } from 'hooks';
// import React, { memo } from 'react';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import createStyles from './styles';

const MoreInfo = React.forwardRef((props: any, ref: any) => {
  // const { hasFocus } = useTouchable();
  // const styles = useComputedStyles(createStyles, { hasFocus });
  const styles = useComputedStyles(createStyles, { hasFocus: false });

  return (
    <TouchableOpacity onPress={props.onPress} ref={ref}>
      <View style={styles.button}>
        <Text style={styles.text}>More info</Text>
      </View>
    </TouchableOpacity>
  );
});

// export default memo(withTouchable(MoreInfo));
export default MoreInfo;
