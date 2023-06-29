<template>
    <div>
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header text-center">
                        <strong>
                            <h1>Navigasi SPLDV</h1>
                        </strong>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="row">
                                    <div class="col-4">
                                        <div class="input-group input-group-sm mb-3">
                                            <span class="input-group-text" id="inputGroup-sizing-sm">a</span>
                                            <input type="number" class="form-control" v-model="a"
                                                aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="input-group input-group-sm mb-3">
                                            <span class="input-group-text" id="inputGroup-sizing-sm">b</span>
                                            <input type="number" class="form-control" v-model="b"
                                                aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="input-group input-group-sm mb-3">
                                            <span class="input-group-text" id="inputGroup-sizing-sm">c</span>
                                            <input type="number" class="form-control" v-model="c"
                                                aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="input-group input-group-sm mb-3">
                                            <span class="input-group-text" id="inputGroup-sizing-sm">d</span>
                                            <input type="number" class="form-control" v-model="d"
                                                aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="input-group input-group-sm mb-3">
                                            <span class="input-group-text" id="inputGroup-sizing-sm">e</span>
                                            <input type="number" class="form-control" v-model="e"
                                                aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="input-group input-group-sm mb-3">
                                            <span class="input-group-text" id="inputGroup-sizing-sm">f</span>
                                            <input type="number" class="form-control" v-model="f"
                                                aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="input-group input-group-sm mb-3">
                                            <span class="input-group-text" id="inputGroup-sizing-sm">x_awal</span>
                                            <input type="number" class="form-control" v-model="x_awal"
                                                aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="input-group input-group-sm mb-3">
                                            <span class="input-group-text" id="inputGroup-sizing-sm">x_akhir</span>
                                            <input type="number" class="form-control" v-model="x_akhir"
                                                aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="card-title">
                                                    <h2>
                                                        persamaan yang dibentuk
                                                    </h2>
                                                    <hr>
                                                    <h4>
                                                        {{ a }}x + {{ b }}y = {{ c }} ........... persamaan 1
                                                    </h4>
                                                    <h4>
                                                        {{ d }}x + {{ e }}y = {{ f }} ........... persamaan 2
                                                    </h4>
                                                    <h4>
                                                        x = {{ x_awal }} sampai {{ x_akhir }}
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <br>
                                        <div class="d-grid gap-2">
                                            <button class="btn btn-primary" type="button" @click="hasil">HASIL</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <!-- grafik -->
                                <canvas id="grafik"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class=" col-lg-12">
                <div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Chart from 'chart.js/auto'
import MatrixInvers from '@/MatrixFunc/MatrixInvers';
import perkalianMatrix from '@/MatrixFunc/perkalianMatrix';
export default {
    data: function () {
        return {
            a: 0,
            b: 0,
            c: 0,
            d: 0,
            e: 0,
            f: 0,
            x_awal: 0,
            x_akhir: 0,
            mychart: null,
        }
    },
    mounted() {
        const ctx = document.getElementById('grafik').getContext('2d')
        this.mychart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'persamaan 1',
                    data: [1, 2, 3, 4, 5],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                }, {
                    label: 'persamaan 2',
                    data: [3, 1, 3, 4, 5],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                }]
            },
        })
        this.updateData()
    },
    methods: {
        hasil() {
            // bentuk fungsi harus seperti ini untuk menghindari error
            // jangan gunakan fungsi arrow (=>) karena akan error
            // const hasilArea = document.querySelector('hasil')
            // ubah nilai a b c d e f ke dalam bilangan koma
            const a = parseFloat(this.a)
            const b = parseFloat(this.b)
            const c = parseFloat(this.c)
            const d = parseFloat(this.d)
            const e = parseFloat(this.e)
            const f = parseFloat(this.f)
            const matrix1 = [[a, b], [d, e]]
            const matrix2 = [[c], [f]]
            const matrixInvers = MatrixInvers(matrix1)
            const perkalianMatix = perkalianMatrix(matrixInvers, matrix2)
        },
        updateData() {
            this.mychart.data.labels = ['1', '2', '3', '4', '5']
            this.mychart.update()
        }
    },
}
</script>