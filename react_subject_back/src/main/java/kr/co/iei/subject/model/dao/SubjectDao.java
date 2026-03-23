package kr.co.iei.subject.model.dao;

import kr.co.iei.subject.model.vo.Subject;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface SubjectDao {
    List<Subject> selectSubjectList(Map<String, Object> filterMap);
}