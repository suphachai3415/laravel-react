import React, { useState } from "react";
import BootstrapLayout from "@/layouts/BootstrapLayout";
import { Head } from "@inertiajs/react";


function RepairStatusChecker() {
    const [input, setInput] = useState(""); //เก็บหมายเลขใบซ่อมที่ผู้ใช้กรอก
    const [status, setStatus] = useState(null); //เก็บสเตตัสที่ค้นพบ
    const [error, setError] = useState(""); //ข้อความ error ถ้าไม่เจอหมายเลขใบซ่อม

    // mock data จำลองสถานะ
    const repairData = {
        "12345": { text: "กำลังดำเนินการ", color: "warning", icon: "bi-gear" },
        "67890": { text: "ซ่อมเสร็จแล้ว รอการจัดส่ง", color: "success", icon: "bi-truck" },
        "11111": { text: "ยกเลิกคำสั่งซ่อม", color: "danger", icon: "bi-x-circle" },
        "22222": { text: "อยู่ระหว่างรออะไหล่", color: "secondary", icon: "bi-clock-history" },
    };

    const handleCheckStatus = () => {
        const result = repairData[input];
        if (result) {
            setStatus(result);
            setError("");
        } else {
            setStatus(null);
            setError("ไม่พบข้อมูลหมายเลขนี้");
        }
    };

    return (
        <BootstrapLayout>
            <Head title="ตรวจสอบสถานะการซ่อม" />
            <div className="container py-5">
                <h2 className="mb-4 text-center">🔧 ตรวจสอบสถานะการซ่อม</h2>
                <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: "500px" }}>
                    <div className="mb-3">
                        <label htmlFor="repairId" className="form-label">หมายเลขใบซ่อม</label>
                        <input
                            id="repairId"
                            type="text"
                            className="form-control"
                            placeholder="กรอกหมายเลข เช่น 12345"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-primary w-100" onClick={handleCheckStatus}>
                        ตรวจสอบสถานะ
                    </button>

                    <div className="mt-4">
                        {status && (
                            <div className={`alert alert-${status.color} d-flex align-items-center`} role="alert">
                                <i className={`bi ${status.icon} me-2`}></i>
                                <div>สถานะ: {status.text}</div>
                            </div>
                        )}
                        {error && (
                            <div className="alert alert-danger d-flex align-items-center" role="alert">
                                <i className="bi bi-exclamation-triangle-fill me-2"></i>
                                <div>{error}</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </BootstrapLayout>
    );
}

export default RepairStatusChecker;
