import React, { FC, ReactNode } from 'react';
import { HeadlineOneStyled, ParagraphStyled } from './Text.styled';

interface TextProps {
	type?: 'p' | 'h1';
	children: ReactNode;
}

export const Text: FC<TextProps> = ({ type = 'p', children }) => {
	return (
		<>
			{type === 'p' && (
				<ParagraphStyled>{children}</ParagraphStyled>
			)}
			{type === 'h1' && (
				<HeadlineOneStyled>{children}</HeadlineOneStyled>
			)}
		</>
	);
};