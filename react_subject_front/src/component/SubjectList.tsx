import styles from './SubjectList.module.css';

export default function SubjectList({ subjectList }) {
  // 데이터가 없을 경우를 대비한 예외 처리
  if (!subjectList || subjectList.length === 0) {
    return <p className={styles.no_data}>등록된 강의가 없습니다.</p>;
  }

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.thead_tr}>
            <th>번호</th>
            <th>강의명</th>
            <th>강사</th>
            <th>카테고리</th>
            <th>난이도</th>
            <th>수강인원</th>
          </tr>
        </thead>
        <tbody>
          {subjectList.map((subject) => (
            <tr key={subject.subjectNo} className={styles.tbody_tr}>
              <td>{subject.subjectNo}</td>
              <td className={styles.subject_title}>
                <strong>{subject.subjectTitle}</strong>
              </td>
              <td>{subject.subjectInstructor}</td>
              <td>
                <span
                  className={`${styles.badge} ${styles[`category_${subject.subjectCategory}`]}`}
                >
                  {subject.subjectCategory === 1
                    ? '프론트엔드'
                    : subject.subjectCategory === 2
                      ? '백엔드'
                      : 'DB'}
                </span>
              </td>
              <td>
                <span className={styles.level_text}>
                  Level {subject.subjectLevel}
                </span>
              </td>
              <td className={styles.count_text}>{subject.subjectCount}명</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
