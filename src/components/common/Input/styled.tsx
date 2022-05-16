import styled from 'styled-components';
import { Input } from 'antd';
import { COLORS } from '../../../constants/colors';

type TProps = {
  width?: string,
  border?: string,
};

export const StyledFormControl = styled('div')`
  width: ${(props: TProps) => props.width || '100%'};
  position: relative;
`;
export const StyledInput = styled(Input)`
  height:  48px;
  background: ${COLORS.WHITE};
  border-radius: 6px;
  border: ${(props: TProps) => props.border || '1px solid #050E5F'};
  box-sizing: border-box;
  width: 100%;
  font-size: 14px;
  line-height: 16px;
  color: ${COLORS.GREY};
  padding: 0 16px;
`;
export const StyledFormLabel = styled('label')`
  font-size: 16px;
  line-height: 1;
  margin-bottom: 6px;
  display: block;
  color:${COLORS.BLACK};
  letter-spacing: 0.16px;
`;
