package com.ti.smartcampus.repositories.specification;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import org.springframework.data.jpa.domain.Specification;

import java.time.OffsetDateTime;
import java.util.List;

/**
 * @author Azam
 */
public record GenericSpecification<T>(SearchCriteria criteria) implements Specification<T> {

    @Override
    public Predicate toPredicate(Root<T> root, CriteriaQuery<?> cq, CriteriaBuilder builder) {

        if (criteria.getOperation().equalsIgnoreCase(">")) {
            return builder.greaterThanOrEqualTo(
                    root.<String>get(criteria.getKey()), criteria.getValue().toString());
        } else if (criteria.getOperation().equalsIgnoreCase("<")) {
            return builder.lessThanOrEqualTo(
                    root.<String>get(criteria.getKey()), criteria.getValue().toString());
        } else if (criteria.getOperation().equalsIgnoreCase("d>")) {
            return builder.greaterThanOrEqualTo(root.get(criteria.getKey()), (OffsetDateTime) criteria.getValue());
        } else if (criteria.getOperation().equalsIgnoreCase("d<")) {
            return builder.lessThanOrEqualTo(root.get(criteria.getKey()), (OffsetDateTime) criteria.getValue());
        } else if (criteria.getOperation().equalsIgnoreCase(":")) {
            if (root.get(criteria.getKey()).getJavaType() == String.class) {
                return builder.like(
                        root.<String>get(criteria.getKey()), "%" + criteria.getValue() + "%");
            } else {
                return builder.equal(root.get(criteria.getKey()), criteria.getValue());
            }
        } else if (criteria.getOperation().equalsIgnoreCase("in")) {
            CriteriaBuilder.In<Integer> inClause = builder.in(root.get(criteria.getKey()));
            List<Integer> branches = (List<Integer>) criteria.getValue();
            for (Integer t : branches) {
                inClause.value(t);
            }
            return inClause;
        }
        return null;
    }
}
