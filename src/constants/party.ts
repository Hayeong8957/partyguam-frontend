type Menu = {
  대메뉴: string;
  소메뉴: {
    label: string;
    route: string;
  }[];
};

export const PARTY_SETTING_MENU = (partyId?: string) => {
  return [
    {
      대메뉴: '파티 관리',
      소메뉴: [
        { label: '파티 수정', route: `/party/setting/${partyId}` },
        { label: '파티원 관리', route: `/party/setting/partyUsers/${partyId}` },
      ],
    },
    {
      대메뉴: '모집 관리',
      소메뉴: [
        { label: '모집 편집', route: `/party/setting/recruit/${partyId}` },
        { label: '지원자 관리', route: `/party/setting/applicant/${partyId}` },
      ],
    },
  ] as Menu[];
};
