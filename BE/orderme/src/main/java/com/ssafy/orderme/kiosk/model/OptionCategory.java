package com.ssafy.orderme.kiosk.model;

import java.time.LocalDateTime;

/**
 * 옵션 카테고리 모델 클래스
 */
public class OptionCategory {
    private Integer categoryId;      // 카테고리 ID - Long에서 Integer로 변경
    private String categoryName;  // 카테고리 이름
    private Boolean isRequired;   // 필수 여부
    private Integer displayOrder; // 표시 순서
    private Boolean isSoldOut;    // 품절 여부
    private Boolean isDeleted;    // 삭제 여부
    private LocalDateTime deletedAt; // 삭제 시간

    // Getter와 Setter 메서드
    public Integer getCategoryId() {  // 반환 타입 변경: Long -> Integer
        return categoryId;
    }

    public void setCategoryId(Integer categoryId) {  // 파라미터 타입 변경: Long -> Integer
        this.categoryId = categoryId;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public Boolean getIsRequired() {
        return isRequired;
    }

    public void setIsRequired(Boolean isRequired) {
        this.isRequired = isRequired;
    }

    public Integer getDisplayOrder() {
        return displayOrder;
    }

    public void setDisplayOrder(Integer displayOrder) {
        this.displayOrder = displayOrder;
    }

    public Boolean getIsSoldOut() {
        return isSoldOut;
    }

    public void setIsSoldOut(Boolean isSoldOut) {
        this.isSoldOut = isSoldOut;
    }

    public Boolean getIsDeleted() {
        return isDeleted;
    }

    public void setIsDeleted(Boolean isDeleted) {
        this.isDeleted = isDeleted;
    }

    public LocalDateTime getDeletedAt() {
        return deletedAt;
    }

    public void setDeletedAt(LocalDateTime deletedAt) {
        this.deletedAt = deletedAt;
    }
}