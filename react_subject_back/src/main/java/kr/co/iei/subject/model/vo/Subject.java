package kr.co.iei.subject.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.apache.ibatis.type.Alias;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Alias("subject")
public class Subject {
    private Integer subjectNo;
    private String subjectTitle;
    private String subjectInstructor;
    private Integer subjectCategory;
    private Integer subjectLevel;
    private Integer subjectCount;
}
