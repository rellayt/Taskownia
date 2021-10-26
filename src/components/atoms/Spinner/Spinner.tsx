import { ReactElement } from 'react';
import { MaterialSpinner, Wrapper } from './Spinner.styles';
import { Optional } from '../../../core/base/types/optional.type';
import { Key } from '../../../core/base/types/key.type';
import { selectiveColors } from '../../../assets/styles/theme';

interface SpinnerProps {
	color?: Optional<Key<typeof selectiveColors>>;
}

const Spinner = (): ReactElement => (
	<Wrapper>
		<MaterialSpinner />
	</Wrapper>
);

export default Spinner;
