'use client';
import Link from 'next/link';
import styled from '@emotion/styled';

import { Dropdown, Menus } from '@/components/molecules';
import { LoginModal } from '@/components/organisms';
import { useModalContext } from '@/contexts/ModalContext';
import { palette, zIndex } from '@/styles';

/**
 * NOTE.
 * 전역 헤더임 -> 매번 page template에 넣을 건지 전역에 때려박을건지 결정
 */
export default function Header() {
  const { openModal } = useModalContext();

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <HeaderLeft>
          <Link className="app-title" href="/">
            GUAM.
          </Link>
          <Menus />
        </HeaderLeft>

        <HeaderRight>
          <Dropdown />
          <LoginButton onClick={() => openModal({ children: <LoginModal /> })}>로그인</LoginButton>
        </HeaderRight>
      </HeaderWrapper>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 84px;
  width: 100%;
  border-bottom: 2px solid;
  border-color: ${palette.grey200};
  z-index: ${zIndex.navIndex};
  background-color: ${palette.white};
`;

const HeaderWrapper = styled.div`
  width: 77.75rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

/** NOTE
 * Chip과는 별개로 로그인 버튼
 */
const LoginButton = styled.button`
  display: inline-flex;
  align-items: center;
  border-radius: 62.4375rem;
  background-color: ${palette.primaryGreen};
  height: 2.25rem;
  font-size: 1.25rem;
  padding: 0.25rem 1.25rem 0.25rem 1.25rem;
  color: ${palette.black};
  cursor: pointer;
  margin-left: 1rem;
`;

const HeaderLeft = styled.div`
  display: flex;
  justify-self: left;
  gap: 5.9375rem;
`;

const HeaderRight = styled.div`
  display: flex;
  justify-self: right;
`;
