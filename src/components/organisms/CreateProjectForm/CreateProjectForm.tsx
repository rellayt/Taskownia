import React, { ReactElement } from 'react';
import { Wrapper } from './CreateProjectForm.styles';
import { TextField } from '../../atoms/TextField/TextField';
import { CreateProjectData } from '../../../views/CreateProject';
import { useFormik } from 'formik';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import DescriptionIcon from '@mui/icons-material/Description';
import Button from '../../atoms/Button/Button';
import { isFalseValue } from '../../../core/base/utility/isFalseValue';
import { isEveryElementTouched } from '../../../core/base/utility/isEveryElementTouched';
import { CreateProjectSchema } from '../../../configuration/schemas/CreateProjectSchema';

interface CreateProjectFormProps {
	isProcessing?: boolean;
	handleSubmit: Function;
}

const CREATE_PROJECT_INITIAL_VALUES: CreateProjectData = {
	title: '',
	description: '',
};

const CreateProjectForm = ({ isProcessing, handleSubmit }: CreateProjectFormProps): ReactElement => {
	const handleKeyPress = (event: KeyboardEvent) => {
		if (event.key === 'Enter') submit();
	};

	const {
		values,
		handleBlur,
		touched,
		errors,
		resetForm,
		isValidating,
		handleChange,
		handleSubmit: submit,
		isValid,
	} = useFormik<CreateProjectData>({
		initialValues: CREATE_PROJECT_INITIAL_VALUES,
		validationSchema: CreateProjectSchema,
		validateOnChange: true,
		onSubmit: (values) => {
			resetForm();
			handleSubmit(values);
		},
	});

	return (
		<Wrapper>
			<TextField
				label="Tytuł"
				name="title"
				value={values.title}
				onChange={handleChange}
				onBlur={handleBlur}
				disabled={isProcessing}
				onKeyPress={handleKeyPress}
				error={Boolean(errors.title && touched.title)}
				helperText={Boolean(errors.title && touched.title) && errors.title}
				InputProps={{
					startAdornment: <DriveFileRenameOutlineIcon />,
				}}
			/>
			<TextField
				label="Opis"
				name="description"
				multiline
				minRows={5}
				maxRows={8}
				value={values.description}
				onChange={handleChange}
				onBlur={handleBlur}
				disabled={isProcessing}
				onKeyPress={handleKeyPress}
				error={Boolean(errors.description && touched.description)}
				helperText={Boolean(errors.description && touched.description) && errors.description}
				InputProps={{
					startAdornment: <DescriptionIcon />,
				}}
			/>
			<Button
				disabled={isFalseValue(isValid) || isValidating || isEveryElementTouched(touched)}
				onClick={submit}
				processing={isProcessing}
				type={'submit'}
				fullWidth
				color={'yellow'}>
				Utwórz zlecenie
			</Button>
		</Wrapper>
	);
};

export default CreateProjectForm;
